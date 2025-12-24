import Course from "../models/course.js"
import express from "express";
const router=express.Router()
 



router.get("/",async(req,res)=>{
   try{
    const courses=await Course.find()
    res.json(courses)
   } catch(err){
    res.json({message:err.message})
   }
}
)
router.get("/:id",async(req,res)=>{
    try{
        const ID=req.params.id
        const course=await Course.findById(ID)
        res.json(course)
    }catch(err){
        res.json({message:err.message})
    }
}
)
router.post("/",async(req,res)=>{
   const course=new Course({
        title:req.body.title,
        description:req.body.description,
        instructorName:req.body.instructorName,
        price:req.body.price,
        category:req.body.category,
        numOfEnrolledStudents:req.body.numOfEnrolledStudents
    })
    try{
        const savedCourse=await course.save()
        res.json(savedCourse)
    }catch(err){
        res.json({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const ID=req.params.id
        const course=await Course.findByIdAndDelete(ID)
        res.json(course)

    }catch(err){
        res.json({message:err.message})
    }
}
)
router.patch("/:id",async(req,res)=>{
    try{
        const ID=req.params.id
        const updatedCourse=await Course.findByIdAndUpdate(ID,{$set:req.body},{new:true})
        res.json(updatedCourse)
    }catch(err){
        res.json({message:err.message})
    }
})
export default router;