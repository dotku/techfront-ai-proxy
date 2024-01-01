export const handler = async (event) => {
    const rsp = await fetch("https://www.aixx.ai/ajax/chat", {
  "headers": {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "Hm_lvt_7d28abb722e938623b65b958f0753c13=1704095494; __51uvsct__3GyQSE655Y3D70ez=1; __51vcke__3GyQSE655Y3D70ez=9196ba40-9a6c-5b65-8fc7-f6eef1c49ffa; __51vuft__3GyQSE655Y3D70ez=1704095494157; PHPSESSID=b09gmqcu9vfu5689te1s3pada1; __user_identity=ab116d9f8c5fc5ea8c75bf0a72cca11dc618adc1297d75517894e60abd2d42cda%3A2%3A%7Bi%3A0%3Bs%3A15%3A%22__user_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B29683%2C%22XiwMU0VU3o5WBIPpDd4uhpJIZSdchuIp%22%2C7776000%5D%22%3B%7D; _csrf=a7fe439a4a03e285d72f008e7f4860eba68c84ee873269e9ec8b3c299829d5e0a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%229iDVEu5IPLr7C6A4xPlNqmBKIdh13IP7%22%3B%7D; Hm_lpvt_7d28abb722e938623b65b958f0753c13=1704095664; __vtins__3GyQSE655Y3D70ez=%7B%22sid%22%3A%20%22a0d82193-4d2b-511e-9eff-53c2c183ab01%22%2C%20%22vd%22%3A%205%2C%20%22stt%22%3A%20170742%2C%20%22dr%22%3A%2028698%2C%20%22expires%22%3A%201704095999999%2C%20%22ct%22%3A%201704095664895%7D",
  },
  "body": "question=turbo+%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88%3F&question_type=1&random_str=GshEGcMrdSw5DMZ&random_str2=Kw7xS3JZRkAK6Xj&bot_type=ChatGPT3.5Turbo&e=",
  "method": "POST"
}).then(rsp => json());
  return {
        statusCode: 200,
        body: JSON.stringify(rsp)
    }
}
