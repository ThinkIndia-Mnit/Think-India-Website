import Link from "next/link";

const SectionDropdown = ({ sectionName, sectionLink }) => {
  return (
    <Link href={`/Sections/${sectionLink}`}>
      <a>{sectionName}</a>
    </Link>
  );
};

export default SectionDropdown;
