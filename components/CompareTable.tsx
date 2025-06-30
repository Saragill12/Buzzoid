// import React from 'react';
// import {
//   Check,
//   X,
//   Users,
//   DollarSign,
//   Clock,
//   CreditCard,
//   Truck,
//   UserCheck,
//   Calendar,
//   Shield,
// } from 'lucide-react';

// interface ComparisonFeature {
//   icon: React.ReactNode;
//   label: string;
//   buzzoidValue: string;
//   othersValue: string;
// }

// const ComparisonCard: React.FC = () => {
//   const features: ComparisonFeature[] = [
//     {
//       icon: <Users className="w-4 h-4" />,
//       label: "Bot Followers",
//       buzzoidValue: "None",
//       othersValue: "Often use bots",
//     },
//     {
//       icon: <DollarSign className="w-4 h-4" />,
//       label: "Pricing",
//       buzzoidValue: "Transparent",
//       othersValue: "Hidden fees",
//     },
//     {
//       icon: <Clock className="w-4 h-4" />,
//       label: "Support",
//       buzzoidValue: "24/7 US-based",
//       othersValue: "Limited",
//     },
//     {
//       icon: <CreditCard className="w-4 h-4" />,
//       label: "Payment",
//       buzzoidValue: "All major cards",
//       othersValue: "Limited options",
//     },
//     {
//       icon: <Truck className="w-4 h-4" />,
//       label: "Delivery",
//       buzzoidValue: "Fastest",
//       othersValue: "Often slow",
//     },
//     {
//       icon: <UserCheck className="w-4 h-4" />,
//       label: "Login Info",
//       buzzoidValue: "Not required",
//       othersValue: "Often required",
//     },
//     {
//       icon: <Calendar className="w-4 h-4" />,
//       label: "Established",
//       buzzoidValue: "Since 2012",
//       othersValue: "Often newer",
//     },
//     {
//       icon: <Shield className="w-4 h-4" />,
//       label: "Account Safety",
//       buzzoidValue: "Guaranteed safe",
//       othersValue: "Often risky",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-black text-center mb-10">
//         How We Compare
//       </h2>

//       <div className="grid grid-cols-3 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
//         {/* Column 1: Labels */}
//         <div>
//           <div className="bg-white py-4 px-4 border-b border-gray-200 text-center font-semibold text-gray-700">
//             Features
//           </div>
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-2 px-4 py-4 border-b border-gray-100"
//             >
//               <div className="text-blue-600">{feature.icon}</div>
//               <span className="text-sm text-gray-700">{feature.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Column 2: Buzzoid */}
//         <div>
//           <div className="bg-orange-500 py-4 px-4 border-b border-gray-200 text-white text-center font-semibold">
//             Buzzoid.com
//           </div>
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="px-4 py-4 bg-orange-50 border-b border-gray-100 flex items-center"
//             >
//               <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-2">
//                 <Check className="w-3 h-3 text-white" />
//               </div>
//               <span className="text-sm text-gray-800">{feature.buzzoidValue}</span>
//             </div>
//           ))}
//         </div>

//         {/* Column 3: Others */}
//         <div>
//           <div className="bg-gray-200 py-4 px-4 border-b border-gray-200 text-center font-semibold text-gray-700">
//             Others
//           </div>
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="px-4 py-4 bg-white border-b border-gray-100 flex items-center"
//             >
//               <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center mr-2">
//                 <X className="w-3 h-3 text-gray-600" />
//               </div>
//               <span className="text-sm text-gray-600">{feature.othersValue}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComparisonCard;
