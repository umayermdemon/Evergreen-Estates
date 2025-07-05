import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Booked = ({estate}) => {
  const {
    id,
    image,
    estate_title,
    segment_name,
    short_description,
  } = estate || {};
  return (
    <div>
      <Card className=" mx-auto my-2 flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 h-[240px] md:h-[265px] lg:h-[250px] rounded-r-none"
      >
        <img
          src={image}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="h-[240px] md:h-[265px] lg:h-[250px]">
        <Typography  color="gray" className=" mb-1 md:mb-2 lg:mb-2 uppercase text-xs md:text-sm lg:text-sm font-semibold font-rubik">
          {segment_name}
        </Typography>
        <Typography  color="black" className=" mb-1 md:mb-2 lg:mb-2 text-sm md:text-xl lg:text-xl font-semibold font-rubik">
        {estate_title}
        </Typography>
        <Typography color="gray" className="mb-1 md:mb-2 lg:mb-2 font-normal font-rubik text-xs md:text-base lg:text-base">
          { short_description}
        </Typography>
        <div className="flex items-center justify-center mt-0 md:mt-2 lg:mt-4 ">
        <Link to={`/detailsEstate/${id}`}>
            <Button
              size="md"
              className="bg-[#0B2B4F] font-rubik text-xs lg:text-sm"
            >
              View Property
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
    </div>
  );
};

Booked.propTypes={
  estate:PropTypes.object.isRequired
}

export default Booked;