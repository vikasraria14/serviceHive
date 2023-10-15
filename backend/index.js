const express = require('express');
const cors = require('cors');
const config = require('./config.json');
const app = express();
// const a = require('./database/createTables')
app.use(cors());
app.use(express.json());

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const userRouter = require('./routes/user')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/register')
const serviceProviderSignUp = require('./routes/serviceProviderRegistration')
const serviceProviderLogin = require('./routes/serviceProviderLogin.js')
const orderRouter = require('./routes/orders')

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/register', signupRouter);
app.use('/api/v1/serviceProviderRegistration', serviceProviderSignUp);
app.use('/api/v1/serviceProviderLogin', serviceProviderLogin);
app.use('/api/v1/orders', orderRouter)

const port = process.env.PORT || config.port
app.listen(port, () => {
    console.log(`QKart Backend running at port ${port}`);
});

