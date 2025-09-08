import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/components/ui/button';

interface ReCaptchaModalProps {
  onVerified: () => void;
}

const ReCaptchaModal = ({ onVerified }: ReCaptchaModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check if user has already been verified in this session
    const isAlreadyVerified = sessionStorage.getItem('recaptcha-verified');
    if (!isAlreadyVerified) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      onVerified();
    }
  }, [onVerified]);

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setIsVerified(true);
      sessionStorage.setItem('recaptcha-verified', 'true');
      setTimeout(() => {
        setIsVisible(false);
        onVerified();
      }, 1000);
    }
  };

  const handleSkip = () => {
    sessionStorage.setItem('recaptcha-verified', 'true');
    setIsVisible(false);
    onVerified();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-card p-8 rounded-2xl border border-border/50 max-w-md w-full text-center relative"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSkip}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Security Verification</h2>
              <p className="text-muted-foreground">
                Please verify you're not a robot to continue
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key
                onChange={handleCaptchaChange}
                theme="dark"
              />
            </div>

            {isVerified && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 font-medium"
              >
                ✓ Verification successful!
              </motion.div>
            )}

            <Button
              variant="ghost"
              onClick={handleSkip}
              className="mt-4 text-muted-foreground hover:text-foreground"
            >
              Skip for now
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReCaptchaModal;