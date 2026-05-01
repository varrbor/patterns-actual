// ===============================
// Existing app interface
// ===============================
class PaymentProcessor {
  pay(amount) {
    throw new Error("pay() must be implemented")
  }
}

// ===============================
// Third‑party library (cannot modify)
// ===============================
class ThirdPartyPaymentSDK {
  makePayment(value) {
    console.log(`Third‑party payment of $${value} processed`)
  }
}

// ===============================
// Adapter — makes SDK compatible
// ===============================
class PaymentAdapter extends PaymentProcessor {
  constructor(thirdPartySDK) {
    super()
    this.sdk = thirdPartySDK
  }

  pay(amount) {
    // Translate our interface → SDK interface
    this.sdk.makePayment(amount)
  }
}

// ===============================
// Usage
// ===============================
const sdk = new ThirdPartyPaymentSDK()
const processor = new PaymentAdapter(sdk)

processor.pay(100) // Works even though SDK uses makePayment()
