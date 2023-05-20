import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "AC59bfc33f4bbff7b56419d430124861c4"
auth_token = "3812a97c3484000c0e7d4f7c8f234cd8"
client = Client(account_sid, auth_token)

message = client.messages.create(
                     body="",
                     from_='+16696095217',
                     to='+66990096144'
                 )

print(message.sid)