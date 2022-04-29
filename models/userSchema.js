import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  userId: Number,
  userName: String,
  userPwd: String,
  userEmail: String,
  mobile: String,
  sex: Number,
  depId: [],
  job: String,
  state: {
    type: Number,
    default: 1,
  },
  role: {
    type: Number,
    default: 1,
  },
  roleList: [],
  createdTime: {
    type: Date,
    default: Date.now(),
  },
  lastLoginTime: {
    type: Date,
    default: Date.now(),
  },
  remark: String,
});

export default mongoose.model('users', userSchema, 'users');
