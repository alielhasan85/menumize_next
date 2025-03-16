import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function TermsOfServiceModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>Last updated: March 2024</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <h3 className="font-semibold">1. Acceptance of Terms</h3>
          <p>
            By accessing and using Menu QRs, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not
            use our service.
          </p>

          <h3 className="font-semibold">2. Service Description</h3>
          <p>
            Menu QRs provides digital menu management and QR code generation
            services for restaurants and food service businesses.
          </p>

          <h3 className="font-semibold">3. User Accounts</h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>

          <h3 className="font-semibold">4. Payment Terms</h3>
          <p>
            Subscription fees are billed in advance on a monthly basis. All
            payments are non-refundable unless otherwise required by law.
          </p>

          {/* Add more terms sections as needed */}
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
