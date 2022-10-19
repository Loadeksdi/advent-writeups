interface SafelinkProps {
  day: number;
  next: boolean;
  year: number;
}

export default function Safelink(props: SafelinkProps) {
  if (props.next) {
    return (
      <div>
        <a
          href={props.day >= 25 ? undefined : `/${props.year}/day/${+props.day + 1}`}
          class="text-2xl text-white text-left underline"
        >
          {props.day >= 25 ? " " : "Next challenge"}
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <a
          href={props.day <= 1 ? undefined : `/${props.year}/day/${+props.day - 1}`}
          class="text-2xl text-white text-left underline"
        >
          {props.day <= 1 ? " " : "Previous challenge"}
        </a>
      </div>
    );
  }
}
