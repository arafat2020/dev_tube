import axios from 'axios'
export default function test(req, res) {
    const { url } = req.body
    if (req.method === 'POST') {
        axios.get(url).then(res => {
            res.json(res)
        }).catch(err => {
            res.send(err)
        })
       
    }
}