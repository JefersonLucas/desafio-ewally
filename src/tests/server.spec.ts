import supertest from 'supertest'

const request = supertest('http://localhost:8080')

test('Verify digitable line', async () => {
  const res = await request.get('/boletos/21290001192110001210904475617405975870000002000')

  return expect(res.status).toBe(200)
})
