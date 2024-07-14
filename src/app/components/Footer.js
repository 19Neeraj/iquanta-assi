
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between space-x-8">
          <div>
            <h3 className="font-bold mb-4">Icons</h3>
            <ul>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Air Force 1</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Huarache</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Air Max 90</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Air Max 95</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Shoes</h3>
            <ul>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">All Shoes</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Custom Shoes</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Jordan Shoes</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Running Shoes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Clothing</h3>
            <ul>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">All Clothing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Modest Wear</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Hoodies & Pullovers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Shirts & Tops</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Kids'</h3>
            <ul>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Infant & Toddler Shoes</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Kids' Shoes</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Kids' Jordan Shoes</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Kids' Basketball Shoes</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-10">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <div>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Find A Store</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Become A Member</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Send Us Feedback</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Help</h3>
                <ul>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Get Help</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Order Status</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Delivery</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Returns</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Payment Options</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us On Nike.com Inquiries</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us On All Other Inquiries</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Nike</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">News</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Investors</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Sustainability</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
