import classNames from "classnames";
import "./button.css";

export default function Button({
  children,
  variant,
  size = "md",
  responsive = true,
}: any) {
  // const btn = classNames("inline-block px-4 py-4 rounded-lg border-red-500",
  //     {
  //         'bg-medium-roast': variant === 'primary',
  //         "text-white": variant === "primary",
  //         "h-8": size === 'small'
  //     },
  // )F

  const btn = classNames(
    {
      "btn-green": variant === "green",
      "btn-orange": variant === "orange",
      "btn-white": variant === "white",
    },
    {
      "btn-size-sm md:btn-size-md lg:btn-size-lg":
        responsive && size === "responsive",
    }
  );

  return <button className={btn}>{children}</button>;
}
