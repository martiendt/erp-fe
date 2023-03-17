import { describe, expect, it } from 'vitest'
import { useHttpUser } from './http'

describe('sidebar menu store', () => {
  it('readAll() should return data users', () => {
    const httpUser = useHttpUser()
    const result = httpUser.readAll()

    expect(result).toHaveProperty('users')
    expect(result).toHaveProperty('pagination.page')
  })
})
