import React from 'react'
import PrivacyPolicyhead from '../components/PrivacyPolicy/PrivacyPolicyhead'
import PrivacypolicyContents from '../components/PrivacyPolicy/PrivacypolicyContents'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <div>
      <PrivacyPolicyhead/>
      <PrivacypolicyContents/>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy
