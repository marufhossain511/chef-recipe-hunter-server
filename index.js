const express =require('express')
const app=express()
const port =process.env.PORT || 5000;
const cors =require('cors')

const data=require('./data/data.json')
const feedbackData=require('./data/feedback.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.get('/data',(req,res)=>{
    res.send(data)
})

app.get('/feedback',(req,res)=>{
  res.send(feedbackData)
})

app.get('/data/:id',(req,res)=>{
   const id=parseInt(req.params.id)
   const selectedChef=data.find(d=>parseInt(d.id)=== id)
   res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
