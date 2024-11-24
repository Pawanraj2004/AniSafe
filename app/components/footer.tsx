export const Footer = () => {
  return (
    <footer className="bg-[#163544] text-white p-6">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-lg">&copy; 2024 AniSafe. All rights reserved.</p>
        <p className="text-sm">
          <a
            href="/terms"
            className="hover:text-[#38ddba] transition-colors"
          >
            Terms of Service
          </a>{" "}
          |{" "}
          <a
            href="/privacy"
            className="hover:text-[#38ddba] transition-colors"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};
