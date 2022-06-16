import supertest from 'supertest'

const request = supertest('http://localhost:8080')

test('Verify port 8080', async () => {
  const res = await request.get('/boletos')
  return expect(res.status).toBe(200)
})
