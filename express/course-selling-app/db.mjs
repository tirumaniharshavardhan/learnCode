import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    firstName: String,
    lastName: String, 
    email: {type: String, unique: true, required: true},
    password: String,
})

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: {type: String, unique: true, required: true},
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    adminId: ObjectId
})

const purchaseSchema = new Schema({ 
    courseId: ObjectId, 
    userId: ObjectId
})

const UserModel = mongoose.model('users', userSchema)
const AdminModel = mongoose.model('admin', adminSchema)
const CourseModel = mongoose.model('courses', courseSchema)
const PurchaseModel = mongoose.model('purchases', purchaseSchema)

export {UserModel, AdminModel, CourseModel, PurchaseModel}