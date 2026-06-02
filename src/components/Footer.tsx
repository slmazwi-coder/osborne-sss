import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-12 pb-8 w-full" style={ { background: '#1B4D2E', borderTop: '4px solid #C9A84C' } }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 shrink-0 rounded-xl overflow-hidden shadow-lg" style={ { background: '#C9A84C', border: '2px solid #C9A84C' } }>
                <img src="/osborn_logo.png" alt="Osborn SSS logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-base font-bold leading-tight" style={ { color: '#C9A84C' } }>
                  Osborn Senior Secondary School
                </h3>
                <p className="text-sm italic mt-0.5" style={ { color: 'rgba(201,168,76,0.65)' } }>
                  "Let There Be Light"
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" target="_blank" rel="noreferrer"
                className="p-2 rounded-full transition-colors"
                style={ { background: 'rgba(201,168,76,0.15)', color: '#C9A84C' } }
                aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 pb-2 uppercase tracking-wide" style={ { color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.25)' } }>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm" style={ { color: 'rgba(201,168,76,0.8)' } }>
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>Tshungwana A/A, Osborn, Mount Frere, 5090</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>083 210 5055</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="shrink-0 mt-0.5" />
                <span className="break-all">osbornsss@email.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 pb-2 uppercase tracking-wide" style={ { color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.25)' } }>
              School Hours
            </h4>
            <ul className="space-y-2 text-sm" style={ { color: 'rgba(201,168,76,0.8)' } }>
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="font-medium">07:30 – 15:30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sat – Sun</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center text-xs" style={ { borderTop: '1px solid rgba(201,168,76,0.15)', color: 'rgba(201,168,76,0.5)' } }>
          <p>© {new Date().getFullYear()} Osborn Senior Secondary School. All Rights Reserved.</p>
          <Link to="/admin/login" className="text-xs mt-2 inline-block transition-colors hover:opacity-80" style={ { color: 'rgba(201,168,76,0.3)' } }>
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};
