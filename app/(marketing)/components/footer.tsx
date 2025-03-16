
"use client";
import { APP_NAME } from '@/lib/constants';
import { useState } from "react";
import TermsOfServiceModal from '../modals/TermsOfServiceModal';
import PrivacyPolicyModal from '../modals/PrivacyPolicyModal';



const Footer = () => {
  const currentYear = new Date().getFullYear();
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
<>
    

 <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
 <p className="text-xs text-gray-500 dark:text-gray-400">
   ©{APP_NAME} {currentYear}. All rights reserved.
 </p>
 <nav className="sm:ml-auto flex gap-4 sm:gap-6">
   <button
     className="text-xs hover:underline text-gray-500"
     onClick={() => setIsTermsOpen(true)}
   >
     Terms of Service
   </button>
   <button
     className="text-xs hover:underline text-gray-500"
     onClick={() => setIsPrivacyOpen(true)}
   >
     Privacy
   </button>
 </nav>
</footer>
 {/* MODALS */}
      <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      </>
  );
};

export default Footer;

 

