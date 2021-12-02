const { Producer } = require("sqs-producer");

exports.handler = async (event) => {
  const { email, sub: userId } = event.request.userAttributes;

  const producer = Producer.create({
    queueUrl: "https://sqs.eu-west-1.amazonaws.com/659393744621/MyAuthQueue",
    region: "eu-west-1",
  });

  const message = {
    id: email.replace(/[&\/\\#, +()$~%.'":*?<>{}@]/g, "0"),
    body: "user.activate",
    messageAttributes: {
      id: {
        DataType: "String",
        StringValue: userId,
      },
      email: {
        DataType: "String",
        StringValue: email,
      },
    },
  };

  const result = await producer.send(message);

  return result;
};
