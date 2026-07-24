---
trigger: manual
---

# Backend integration testing

## Contract

- We use vitest library.
- We write only what I say. Nothing more.
- If you think that I have said something dumb just said me that i am wrong.

## File naming

<resource>.integration.test.ts

## Structure

describe('<Controller>', () => {
describe('GET /resource', () => {
it(...)
it(...)
})

    describe('POST /resource', () => {
        it(...)
    })

})

## Tools

We have apps\backend\tests\user.factory.ts for easier user creating
