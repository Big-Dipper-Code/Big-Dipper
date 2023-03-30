import { it, describe, expect } from 'vitest'

import { toLocaleDateString } from '@/utils/datetimeUtil'

describe('datetimeUtil', () => {
    it('getDateTimeString', () => {
        const date = new Date('2021-01-01T00:00:00.000Z')
        const result = toLocaleDateString(date)
        expect(result).toBe('1/1/2021')
    })
})
