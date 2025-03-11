import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CustomPopover = ({ menu, icon, ...props }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{icon}</PopoverTrigger>
      <PopoverContent className="border border-white bg-black text-white mt-3">
        <nav>
          {menu.map((item) => (
            <ul key={item} className="space-y-2">
              {item.eventProps ? (
                <button onClick={item.eventProps}>{item.title}</button>
              ) : (
                <Link to={item.path}>{item.title}</Link>
              )}
            </ul>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
};
CustomPopover.propTypes = {
  menu: PropTypes.arrayOf(Object),
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default CustomPopover;
