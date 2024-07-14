import Link from 'next/link';

const categories = {
  "New & Featured": [
    { name: "New Releases", link: "/new-featured/new-releases" },
    { name: "Bestsellers", link: "/new-featured/bestsellers" },
    { name: "Member Exclusive", link: "/new-featured/member-exclusive" },
    { name: "Jordan", link: "/new-featured/jordan" },
    { name: "Lifestyle Running", link: "/new-featured/lifestyle-running" },
    { name: "Bra and Legging Duos", link: "/new-featured/bra-and-legging-duos" },
    { name: "Customise with Nike By You", link: "/new-featured/customise-with-nike-by-you" },
    { name: "Sale", link: "/new-featured/sale" },
    { name: "Find Your Feel - Nike Leggings", link: "/new-featured/find-your-feel-nike-leggings" },
    { name: "Running Shoe Finder", link: "/new-featured/running-shoe-finder" },
    { name: "Sustainable Materials", link: "/new-featured/sustainable-materials" },
  ],
  "Men": [
    { name: "All Shoes", link: "/men/all-shoes" },
    { name: "Newest Sneakers", link: "/men/newest-sneakers" },
    { name: "Platform Sneakers", link: "/men/platform-sneakers" },
    { name: "Lifestyle", link: "/men/lifestyle" },
    { name: "Jordan", link: "/men/jordan" },
    { name: "Running", link: "/men/running" },
    { name: "Gym and Training", link: "/men/gym-and-training" },
    { name: "Sandals and Slides", link: "/men/sandals-and-slides" },
    { name: "Basketball", link: "/men/basketball" },
    { name: "Football", link: "/men/football" },
    { name: "Last Sizes Available", link: "/men/last-sizes-available" },
    { name: "Customise with Nike By You", link: "/men/customise-with-nike-by-you" },
    { name: "Top Picks Under ₹ 8000.00", link: "/men/top-picks-under-8000" },
  ],
  "Women": [
    { name: "All Clothing", link: "/women/all-clothing" },
    { name: "Performance Essentials", link: "/women/performance-essentials" },
    { name: "Tops and T-Shirts", link: "/women/tops-and-tshirts" },
    { name: "Sports Bras", link: "/women/sports-bras" },
    { name: "Pants and Leggings", link: "/women/pants-and-leggings" },
    { name: "Shorts", link: "/women/shorts" },
    { name: "Hoodies and Sweatshirts", link: "/women/hoodies-and-sweatshirts" },
    { name: "Jackets and Gilets", link: "/women/jackets-and-gilets" },
    { name: "Skirts and Dresses", link: "/women/skirts-and-dresses" },
    { name: "Modest Wear", link: "/women/modest-wear" },
    { name: "Nike Maternity", link: "/women/nike-maternity" },
    { name: "Plus Size", link: "/women/plus-size" },
  ],
  "Kids": [
    { name: "All Shoes", link: "/kids/all-shoes" },
    { name: "Newest Sneakers", link: "/kids/newest-sneakers" },
    { name: "Jordan", link: "/kids/jordan" },
    { name: "Running", link: "/kids/running" },
    { name: "Basketball", link: "/kids/basketball" },
    { name: "Football", link: "/kids/football" },
    { name: "Sandals and Slides", link: "/kids/sandals-and-slides" },
    { name: "Last Sizes Available", link: "/kids/last-sizes-available" },
  ],
  "Sale": [
    { name: "Men's Sale", link: "/sale/men" },
    { name: "Women's Sale", link: "/sale/women" },
    { name: "Kids' Sale", link: "/sale/kids" },
  ],
  "Customise": [
    { name: "Nike By You", link: "/customise/nike-by-you" },
  ],
  "SNKRS": [
    { name: "SNKRS Launch Calendar", link: "/snkrs/launch-calendar" },
    { name: "Member Exclusive", link: "/snkrs/member-exclusive" },
    { name: "Jordan", link: "/snkrs/jordan" },
  ]
};

export default function DropdownMenu({ category }) {
  const items = categories[category];

  if (!items) return null;

  return (
    <div className=" inset-0 bg-white shadow-md z-10 ">
      <div className="container mx-auto py-6 px-6 grid grid-cols-3 gap-2">
        {items.map((item, index) => (
          <div key={index}>
            <ul className="space-y-2 text-[12px] ">
              <li>
                <Link href={item.link} legacyBehavior>
                  <a>{item.name}</a>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
