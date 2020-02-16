
import mongoose from 'mongoose';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}  
mongoose.Promise = global.Promise
const uri = 'mongodb://heroku_jqg0flwn:muamvvh0rdrebts3jqflebmb80@ds123196.mlab.com:23196/heroku_jqg0flwn'
mongoose.connect(uri, options);
export default mongoose;
