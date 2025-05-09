import { motion } from 'framer-motion';

import SubCategoryItem from './SubCategoryItem';

interface SubcategoryListProps {
  subCategories: string[];
}

const SubcategoryList = ({ subCategories }: SubcategoryListProps) => (
  <motion.div
    layout
    initial={{ scaleY: 0, height: 0 }}
    animate={{ scaleY: 1, height: 'auto' }}
    exit={{ scaleY: 0, height: 0 }}
    transition={{
      duration: 0.15,
      ease: 'easeInOut'
    }}
    style={{ originY: 0 }}
    className="bg-redGray-30"
  >
    <div className="grid grid-cols-2">
      {subCategories.map((categoryItem) => (
        <SubCategoryItem key={categoryItem} categoryItem={categoryItem} />
      ))}
    </div>
  </motion.div>
);
export default SubcategoryList;
