// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const SerpApi = require('google-search-results-nodejs')
  const data  = req.body
  if (req.method === 'POST') {
    const search = new SerpApi.GoogleSearch(process.env.API_KEY)
    search.json({
     q: data.search, 
     location: data.city
    }, (result) => {
      res.json(result)
    })
  }
}
