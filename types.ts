
// Fix: Import React to resolve the missing 'React' namespace error
import React from 'react';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}