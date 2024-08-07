function generateOTP(length) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp  = otp + digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
  
  // Usage example
  const otp = generateOTP(4);
  console.log('Your OTP is:', otp);
  