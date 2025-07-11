'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section id="newsletter" className="py-16 px-4 bg-green-50 dark:bg-muted">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-bold text-green-700">Subscribe to Promotional Updates</h3>
        <p className="text-muted-foreground">Enter your email to receive the latest updates and exciting promotions from GoRide.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert('Subscribed!')
          }}
          className="flex flex-col md:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="ride-input w-full max-w-sm"
          />
          <button type="submit" className="ride-button-primary px-6 py-3">Subscribe</button>
        </form>
      </div>
    </section>
  ) 
}
