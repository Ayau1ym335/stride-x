export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="font-medium text-foreground">GaitAnalytics</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">HIPAA Notice</a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2024 GaitAnalytics. For healthcare professionals only.
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            GaitAnalytics provides clinical decision support tools. Our platform does not diagnose, 
            treat, or prescribe. All clinical decisions remain the responsibility of the treating physician. 
            Intended for use by licensed healthcare professionals only.
          </p>
        </div>
      </div>
    </footer>
  );
}
