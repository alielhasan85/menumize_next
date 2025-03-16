import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


export default function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Last updated: March 2024
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <h3 className="font-semibold">1. Information We Collect</h3>
          <p>
            We collect information that you provide directly to us, including your name, email address, and business information.
          </p>

          <h3 className="font-semibold">2. How We Use Your Information</h3>
          <p>
            We use the information we collect to provide and improve our services, communicate with you, and ensure security of our platform.
          </p>

          <h3 className="font-semibold">3. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information.
          </p>

          <h3 className="font-semibold">4. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
          </p>

          {/* Add more privacy policy sections as needed */}
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}