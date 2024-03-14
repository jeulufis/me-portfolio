import { dataWorks } from "../data/dataWorks";

export default async function Works() {
  return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-3">
      {dataWorks.map((item, index) => (
        <div
          key={index}
          className="w-full rounded-md bg-gray-50 cursor-pointer transition ease-in-out hover:-translate-y-2 duration-500 hover:shadow-md"
        >
          <img src="https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg" className="h-30 w-full" alt={item.title} />
          <div className="m-3">
            <p className="font-medium">{item.title}</p>
            <span className="text-gray-700 leading-loose font-light">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
