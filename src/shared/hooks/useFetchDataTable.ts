import { useState, useCallback, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { transformQueryString } from '@/shared/utils'
import { Pagination } from '@/shared/core/types/columns.type'

type ReturnedHooksData<T> = {
  onFetch: (params: { [key: string]: any }) => void
  dataTable: T[]
  pagination: Pagination | object
  queryParams: { [key: string]: any }
  onSetQueryParams: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any
    }>
  >
}

type FnFetchData<T> = (params: { [key: string]: any }) => Promise<{
  pagination: Pagination
  data: T[]
} | null>

const useFetchDataTable = <T extends { id: number }>(
  fetchData: FnFetchData<T>,
  limit: number = 10,
  isSetQueryString: boolean = false
): ReturnedHooksData<T> => {
  const navigate = useNavigate()
  const [dataTable, setDataTable] = useState<T[]>([])
  const [pagination, setPagination] = useState<Pagination | object>({})
  const [queryParams, setQueryParams] = useState<{ [key: string]: any }>({})
  const isMounted = useRef(true)
  const fetch = useCallback(
    async (params: any) => {
      isMounted.current = true
      const { page = 1, ...otherParams } = 'page' in params ? { ...queryParams, ...params } : params
      const res = await fetchData({
        ...otherParams,
        page,
        limit
      })

      if (!res) return
      if (!isMounted.current) return
      const { pagination, data } = res

      if (data) {
        setDataTable(data)
      }
      if (pagination) {
        setPagination(pagination)
      }
      if (isSetQueryString) {
        handleNavigate({ ...otherParams, page })
      }
    },
    [dataTable]
  )
  const handleNavigate = useCallback(
    (params: any) => {
      if (!_.isEqual(params, queryParams)) {
        navigate(
          {
            pathname: '.',
            search: transformQueryString(params)
          },
          { replace: true }
        )
      }
    },
    [dataTable]
  )

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  return {
    onFetch: fetch,
    dataTable,
    pagination,
    queryParams,
    onSetQueryParams: setQueryParams,
  }
}

export default useFetchDataTable
