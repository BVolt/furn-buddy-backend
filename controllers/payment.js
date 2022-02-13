const stripe = require('stripe')(process.env.STRIPE_SECRET)

const makePayment = async (req, res) => {
    let {amount, id, receipt_email } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount, 
            receipt_email,
            currency: 'USD',
            description: 'Test purchase',
            payment_method: id,
            confirm: true
        })
        console.log('Payment', payment)
        res.json({
            message: 'Payment successful',
            success: true
        })
    }catch(error){
        console.log('Error', error)
        res.json({
            message: 'payment failed',
            success: false
        })
    }
}

module.exports = {makePayment}