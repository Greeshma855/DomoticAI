import {
  BarChart2,
  Bell,
  Droplets,
  Home,
  LayoutDashboard,
  Lightbulb,
  Plus,
  Search,
  Settings,
  ThermometerSun,
  Wifi,
  Wind,
  X
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TemperatureControlCard from './TemperatureControl';

// ... (previous code remains the same until the SmartHomeDashboard component's device card section)
const Card = ({ children, className = '', onClick }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} onClick={onClick}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const DeviceIcon = ({ type, className }) => {
  const icons = {
    'Humidity': Droplets,
    'Temperature': ThermometerSun,
    'Air Conditioner': Wind,
    'Lights': Lightbulb,
    'Wi-fi': Wifi
  };
  
  const IconComponent = icons[type];
  return IconComponent ? <IconComponent className={className} /> : null;
};

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceType, setDeviceType] = useState('Humidity');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: deviceName,
      type: deviceType,
      status: 'off',
      lastActive: 'Just added'
    });
    setDeviceName('');
    setDeviceType('Humidity');
    onClose();
  };

  if (!isOpen) return null;

  const deviceTypes = ['Humidity', 'Temperature', 'Air Conditioner', 'Lights', 'Wi-fi'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Device</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Device Name</label>
            <input
              type="text"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Device Type</label>
            <select
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              {deviceTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Add Device
          </button>
        </form>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: BarChart2, label: 'Analytics', href: '/analytics' },
    { icon: Home, label: 'Smart Home', href: '/dashboard', active: true },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <span className="font-semibold text-lg">DomoticAI</span>
        </div>
      </div>

      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="font-medium">User Account</div>
            <div className="text-sm text-gray-500">Admin</div>
          </div>
        </div>
      </div>

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
                    ? 'bg-green-50 text-green-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
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
// ... (previous state and handlers remain the same)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [devices, setDevices] = useState([
    { name: 'Humidity Sensor', type: 'Humidity', status: 'off', lastActive: '2 days' },
    { name: 'Temperature Sensor', type: 'Temperature', status: 'on', lastActive: 'Active' },
    { name: 'AC Unit', type: 'Air Conditioner', status: 'off', lastActive: '1 hour' },
    { name: 'Main Lights', type: 'Lights', status: 'off', lastActive: '27 min' },
    { name: 'Router', type: 'Wi-fi', status: 'on', lastActive: 'Active' }
  ]);

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

  const handleAddDevice = (newDevice) => {
    setDevices(prevDevices => [...prevDevices, newDevice]);
  };

  const toggleDevice = (index) => {
    setDevices(prevDevices => 
      prevDevices.map((device, i) => {
        if (i === index) {
          const newStatus = device.status === 'on' ? 'off' : 'on';
          return {
            ...device,
            status: newStatus,
            lastActive: newStatus === 'on' ? 'Active' : 'Just now'
          };
        }
        return device;
      })
    );
  };

return (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <div className="min-h-screen bg-green-50/30">
        {/* ... (previous header and stats sections remain the same) */}
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
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-700 rounded-full text-white text-xs flex items-center justify-center">
                  2
                </span>
              </div>
            </div>
          </header>
        <main className="p-6 space-y-6">
          {/* ... (previous sections remain the same) */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               {stats.map((stat) => (
                <Card key={stat.label}>                   <CardContent>
                     <div className="text-3xl font-bold text-green-700">
                       {stat.value}
                       <span className="text-lg">{stat.unit}</span>
                     </div>
                     <div className="text-gray-600">{stat.label}</div>
                     <div className="text-sm text-gray-400">{stat.sublabel}</div>
                   </CardContent>
                 </Card>
               ))}
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TemperatureControlCard/>

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
                      </div>                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>


          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {devices.map((device, index) => (
              <Card 
                key={`${device.name}-${index}`} 
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  device.status === 'on' 
                    ? 'bg-gradient-to-br from-green-600 to-green-700 shadow-lg shadow-green-500/20' 
                    : 'bg-white hover:shadow-md hover:border-green-100'
                }`}
                onClick={() => toggleDevice(index)}
              >
                <CardContent className={`${device.status === 'on' ? 'text-white' : ''}`}>
                  <div className="flex justify-between items-center">
                    <DeviceIcon 
                      type={device.type} 
                      className={`h-6 w-6 ${
                        device.status === 'on' 
                          ? 'text-white' 
                          : 'text-gray-600'
                      }`} 
                    />
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      device.status === 'on'
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {device.status}
                    </div>
                  </div>
                  <div className={`mt-3 font-medium ${
                    device.status === 'on' 
                      ? 'text-white' 
                      : 'text-gray-600'
                  }`}>
                    {device.name}
                  </div>
                  <div className={`text-xs mt-1 ${
                    device.status === 'on' 
                      ? 'text-white/80' 
                      : 'text-gray-400'
                  }`}>
                    {device.lastActive}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card 
              className="border-2 border-dashed cursor-pointer hover:border-green-500 transition-colors duration-200 hover:bg-green-50/50"
              onClick={() => setIsModalOpen(true)}
            >
              <CardContent className="flex flex-col items-center justify-center">
                <Plus className="h-6 w-6 text-gray-400" />
                <span className="mt-2 text-sm text-gray-600">New device</span>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
    <Modal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleAddDevice}
    />
  </div>
);
};

export default SmartHomeDashboard;