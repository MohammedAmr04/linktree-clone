import React from 'react';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { ChevronDown } from 'lucide-react';

function HeaderDrawer({
  setIsDrawerOpen,
  isDrawerOpen,
}: {
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  isDrawerOpen: boolean;
}) {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} direction="right" modal={false}>
      <DrawerContent className="min-w-[100vw] h-full bg-[#fbfbf9] pt-16 z-1">
        <div className="min-w-[100vw] min-h-full bg-[#fbfbf9] pt-16">
          {/* Navigation Menu */}
          <div className="px-6 py-8">
            <nav className="space-y-0">
              {/* Products */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-lg font-semibold text-gray-900">Products</span>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>

              {/* Templates */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-lg font-semibold text-gray-900">Templates</span>
              </div>

              {/* Marketplace */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-lg font-semibold text-gray-900">Marketplace</span>
              </div>

              {/* Learn */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-lg font-semibold text-gray-900">Learn</span>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between py-4">
                <span className="text-lg font-semibold text-gray-900">Pricing</span>
              </div>
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default HeaderDrawer;
