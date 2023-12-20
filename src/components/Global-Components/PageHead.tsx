import Header from "../Header-Components/Header";
interface IProps {
  pageTitle: string;
  image: string;
}
const PageHead = ({ pageTitle, image }: IProps) => {
  return (
    <Header>
      <h4 className="md:ml-8 mb-12 md:mb-0 text-center md:text-left font-barlow font-bold text-white text-4xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
        {pageTitle}
      </h4>
      <img
        src={image}
        alt={`This is a ${pageTitle} page`}
        className="w-fit h-fit lg:w-fit lg:h-fit md:w-60  md:ml-24 heroImage"
      />
    </Header>
  );
};

export default PageHead;
