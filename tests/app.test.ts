import { describe, expect, test } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('App test', async () => {
  await setup({

})

  test('my test', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Nuxt')
  })
})