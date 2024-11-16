import { Root } from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata = {
  title: 'Bookbee',
  description: 'Read, Engage, and Earn',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <Root>
        {children}
      </Root>
    </body>
    </html>
  );
}
