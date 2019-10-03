const {pool,router,Result}=require('./connect.js');

router.all('/',(req,res)=>{
  pool.getConnection((err,conn)=>{
    conn.query('SELECT * FROM footprint',(e,r)=>res.json(new Result({data:r})));
    conn.release();
  })
})

module.exports=router;