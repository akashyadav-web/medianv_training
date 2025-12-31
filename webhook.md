Finally, let's test that the webhook is called correctly when creating a new order. 
OST /a13b5452-5f37-485b-be82-92b84a1c30ab HTTP/1.1
Host: webhook.site
Content-Type: application/json
Content-Length: 85
 
{
    "productId": 1,
    "amount": 1,
    "deliveryAddress": "Fake Street 123"
}
