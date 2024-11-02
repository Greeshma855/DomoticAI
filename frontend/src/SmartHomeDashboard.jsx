import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Search, 
  Settings, 
  Plus, 
  ThermometerSun, 
  Droplets, 
  Wifi, 
  Wind, 
  Lightbulb,
  LayoutDashboard,
  BarChart2,
  Compass,
  ShoppingCart,
  Users,
  Home,
  FileText,
  Boxes,
  Key
} from 'lucide-react';
import TemperatureControlCard from './TemperatureControl';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboards', href: '/dashboard' },
    { icon: BarChart2, label: 'Analytics', href: '/analytics' },
    { icon: Compass, label: 'Discover', href: '/discover' },
    { icon: ShoppingCart, label: 'Sales', href: '/sales' },
    { icon: Home, label: 'Smart Home', href: '/dashboard', active: true },
  ];

  const subMenuItems = [
    { icon: FileText, label: 'Pages', href: '/pages' },
    { icon: Boxes, label: 'Applications', href: '/apps' },
    { icon: ShoppingCart, label: 'E-commerce', href: '/ecommerce' },
    { icon: Key, label: 'Authentication', href: '/auth' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <span className="font-semibold text-lg">DomoticAI</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="font-medium">User Account</div>
            <div className="text-sm text-gray-500">Admin</div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="text-xs font-semibold text-gray-400 uppercase mb-4">Menu</div>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.href);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
                  item.active 
                    ? 'bg-amber-50 text-amber-900' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Sub Menu */}
        <div className="p-4">
          <div className="text-xs font-semibold text-gray-400 uppercase mb-4">Pages</div>
          <nav className="space-y-1">
            {subMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.href);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const SmartHomeDashboard = () => {
  const rooms = ['Cameras', 'Kitchen', 'Living', 'Attic'];
  const stats = [
    { value: '21', unit: '°C', label: 'Living Room', sublabel: 'Temperature' },
    { value: '44', unit: '%', label: 'Outside', sublabel: 'Humidity' },
    { value: '87', unit: 'm²', label: 'Water', sublabel: 'Consumption' },
    { value: '417', unit: 'GB', label: 'Internet', sublabel: 'Usage' }
  ];

  const roomConsumption = [
    { room: 'Living Room', percentage: 15 },
    { room: 'Kitchen', percentage: 30 },
    { room: 'Attic', percentage: 15 },
    { room: 'Garage', percentage: 20 },
    { room: 'Basement', percentage: 20 }
  ];

  const devices = [
    { name: 'Humidity', icon: Droplets, status: 'off', lastActive: '2 days' },
    { name: 'Temperature', icon: ThermometerSun, status: 'on', lastActive: 'Active' },
    { name: 'Air Conditioner', icon: Wind, status: 'off', lastActive: '1 hour' },
    { name: 'Lights', icon: Lightbulb, status: 'off', lastActive: '27 min' },
    { name: 'Wi-fi', icon: Wifi, status: 'on', lastActive: 'Active' }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="min-h-screen bg-amber-50/30">
          {/* Header */}
          <header className="bg-white p-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">Smart Home</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search here"
                  className="pl-10 pr-4 py-2 rounded-lg border"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Settings className="h-6 w-6 text-gray-600" />
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-amber-900 rounded-full text-white text-xs flex items-center justify-center">
                  2
                </span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent>
                    <div className="text-3xl font-bold text-amber-900">
                      {stat.value}
                      <span className="text-lg">{stat.unit}</span>
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.sublabel}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Device Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TemperatureControlCard/>

              {/* Room Consumption */}
              <Card>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Consumption by room</h3>
                    <button className="text-gray-400">
                      <Settings className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {roomConsumption.map((room) => (
                      <div key={room.room} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{room.room}</span>
                        <span className="text-sm text-gray-400">{room.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Device Controls Grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {devices.map((device) => (
                <Card key={device.name} className={device.status === 'on' ? 'bg-amber-900 text-white' : ''}>
                  <CardContent>
                    <device.icon className={`h-6 w-6 ${device.status === 'on' ? 'text-white' : 'text-gray-600'}`} />
                    <div className={`mt-2 text-sm ${device.status === 'on' ? 'text-white' : 'text-gray-600'}`}>
                      {device.name}
                    </div>
                    <div className={`text-xs ${device.status === 'on' ? 'text-white/80' : 'text-gray-400'}`}>
                      {device.lastActive}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-dashed">
                <CardContent className="flex flex-col items-center justify-center">
                  <Plus className="h-6 w-6 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-600">New device</span>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeDashboard;



//the below code can be used as device component in sidebar

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Bell, 
//   Search, 
//   Settings, 
//   Plus, 
//   ThermometerSun, 
//   Droplets, 
//   Wifi, 
//   Wind, 
//   Lightbulb,
//   LayoutDashboard,
//   BarChart2,
//   Compass,
//   ShoppingCart,
//   Users,
//   Home,
//   FileText,
//   Boxes,
//   Key,
//   X
// } from 'lucide-react';
// import TemperatureControlCard from './TemperatureControl';

// const Card = ({ children, className = '', onClick }) => (
//   <div 
//     className={`bg-white rounded-lg shadow ${className}`}
//     onClick={onClick}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = '' }) => (
//   <div className={`p-4 ${className}`}>
//     {children}
//   </div>
// );

// const Sidebar = () => {
//   const navigate = useNavigate();
  
//   const menuItems = [
//     { icon: LayoutDashboard, label: 'Dashboards', href: '/dashboard' },
//     { icon: BarChart2, label: 'Analytics', href: '/analytics' },
//     { icon: Compass, label: 'Discover', href: '/discover' },
//     { icon: ShoppingCart, label: 'Sales', href: '/sales' },
//     { icon: Home, label: 'Smart Home', href: '/dashboard', active: true },
//   ];

//   const subMenuItems = [
//     { icon: FileText, label: 'Pages', href: '/pages' },
//     { icon: Boxes, label: 'Applications', href: '/apps' },
//     { icon: ShoppingCart, label: 'E-commerce', href: '/ecommerce' },
//     { icon: Key, label: 'Authentication', href: '/auth' },
//   ];

//   return (
//     <div className="w-64 h-screen bg-white border-r flex flex-col">
//       {/* Logo Section */}
//       <div className="p-4 border-b">
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-amber-900 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold">D</span>
//           </div>
//           <span className="font-semibold text-lg">DomoticAI</span>
//         </div>
//       </div>

//       {/* User Profile */}
//       <div className="p-4 border-b">
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 rounded-full bg-gray-200"></div>
//           <div>
//             <div className="font-medium">User Account</div>
//             <div className="text-sm text-gray-500">Admin</div>
//           </div>
//         </div>
//       </div>

//       {/* Main Menu */}
//       <div className="flex-1 overflow-y-auto">
//         <div className="p-4">
//           <div className="text-xs font-semibold text-gray-400 uppercase mb-4">Menu</div>
//           <nav className="space-y-1">
//             {menuItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate(item.href);
//                 }}
//                 className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
//                   item.active 
//                     ? 'bg-amber-50 text-amber-900' 
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* Sub Menu */}
//         <div className="p-4">
//           <div className="text-xs font-semibold text-gray-400 uppercase mb-4">Pages</div>
//           <nav className="space-y-1">
//             {subMenuItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate(item.href);
//                 }}
//                 className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Custom Modal Component
// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div 
//         className="absolute inset-0 bg-black/50"
//         onClick={onClose}
//       />
//       <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4">
//         {children}
//       </div>
//     </div>
//   );
// };

// const AddDeviceModal = ({ isOpen, onClose, onAddDevice }) => {
//   const [newDevice, setNewDevice] = useState({
//     name: '',
//     type: '',
//     status: 'off'
//   });

//   const deviceTypes = [
//     { icon: Droplets, value: 'humidity', label: 'Humidity' },
//     { icon: ThermometerSun, value: 'temperature', label: 'Temperature' },
//     { icon: Wind, value: 'air', label: 'Air Conditioner' },
//     { icon: Lightbulb, value: 'light', label: 'Light' },
//     { icon: Wifi, value: 'wifi', label: 'Wi-Fi' }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const selectedType = deviceTypes.find(type => type.value === newDevice.type);
//     if (!selectedType) return;

//     onAddDevice({
//       ...newDevice,
//       icon: selectedType.icon,
//       lastActive: 'Just added'
//     });
//     setNewDevice({ name: '', type: '', status: 'off' });
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Add New Device</h2>
//         <button 
//           onClick={onClose}
//           className="text-gray-500 hover:text-gray-700"
//         >
//           <X className="w-5 h-5" />
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">
//             Device Name
//           </label>
//           <input
//             required
//             type="text"
//             value={newDevice.name}
//             onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
//             placeholder="Enter device name"
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">
//             Device Type
//           </label>
//           <select
//             required
//             value={newDevice.type}
//             onChange={(e) => setNewDevice({ ...newDevice, type: e.target.value })}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//           >
//             <option value="">Select device type</option>
//             {deviceTypes.map((type) => (
//               <option key={type.value} value={type.value}>
//                 {type.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex justify-end space-x-3 mt-6">
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-4 py-2 border rounded-lg hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800"
//           >
//             Add Device
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// const SmartHomeDashboard = () => {
//   const [isAddDeviceOpen, setIsAddDeviceOpen] = useState(false);
//   const [devices, setDevices] = useState([
//     { name: 'Humidity', icon: Droplets, status: 'off', lastActive: '2 days' },
//     { name: 'Temperature', icon: ThermometerSun, status: 'on', lastActive: 'Active' },
//     { name: 'Air Conditioner', icon: Wind, status: 'off', lastActive: '1 hour' },
//     { name: 'Lights', icon: Lightbulb, status: 'off', lastActive: '27 min' },
//     { name: 'Wi-fi', icon: Wifi, status: 'on', lastActive: 'Active' }
//   ]);

//   const handleAddDevice = (newDevice) => {
//     setDevices([...devices, newDevice]);
//   };

//   const toggleDeviceStatus = (index) => {
//     const updatedDevices = [...devices];
//     updatedDevices[index] = {
//       ...updatedDevices[index],
//       status: updatedDevices[index].status === 'on' ? 'off' : 'on',
//       lastActive: updatedDevices[index].status === 'off' ? 'Active' : 'Just now'
//     };
//     setDevices(updatedDevices);
//   };

//   const rooms = ['Cameras', 'Kitchen', 'Living', 'Attic'];
//   const stats = [
//     { value: '21', unit: '°C', label: 'Living Room', sublabel: 'Temperature' },
//     { value: '44', unit: '%', label: 'Outside', sublabel: 'Humidity' },
//     { value: '87', unit: 'm²', label: 'Water', sublabel: 'Consumption' },
//     { value: '417', unit: 'GB', label: 'Internet', sublabel: 'Usage' }
//   ];

//   const roomConsumption = [
//     { room: 'Living Room', percentage: 15 },
//     { room: 'Kitchen', percentage: 30 },
//     { room: 'Attic', percentage: 15 },
//     { room: 'Garage', percentage: 20 },
//     { room: 'Basement', percentage: 20 }
//   ];

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <div className="min-h-screen bg-amber-50/30">
//           {/* ... Keep existing header and other sections ... */}

//           {/* Device Controls Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-6">
//             {devices.map((device, index) => (
//               <Card 
//                 key={`${device.name}-${index}`}
//                 className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
//                   device.status === 'on' ? 'bg-amber-900 text-white' : ''
//                 }`}
//                 onClick={() => toggleDeviceStatus(index)}
//               >
//                 <CardContent>
//                   <device.icon className={`h-6 w-6 ${device.status === 'on' ? 'text-white' : 'text-gray-600'}`} />
//                   <div className={`mt-2 text-sm ${device.status === 'on' ? 'text-white' : 'text-gray-600'}`}>
//                     {device.name}
//                   </div>
//                   <div className={`text-xs ${device.status === 'on' ? 'text-white/80' : 'text-gray-400'}`}>
//                     {device.lastActive}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//             <Card 
//               className="border-2 border-dashed cursor-pointer hover:border-amber-900/20 transition-all duration-200 hover:shadow-lg"
//               onClick={() => setIsAddDeviceOpen(true)}
//             >
//               <CardContent className="flex flex-col items-center justify-center">
//                 <Plus className="h-6 w-6 text-gray-400" />
//                 <span className="mt-2 text-sm text-gray-600">New device</span>
//               </CardContent>
//             </Card>
//           </div>

//           <AddDeviceModal
//             isOpen={isAddDeviceOpen}
//             onClose={() => setIsAddDeviceOpen(false)}
//             onAddDevice={handleAddDevice}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmartHomeDashboard;