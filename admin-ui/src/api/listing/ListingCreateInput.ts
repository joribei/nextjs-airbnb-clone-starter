import { InputJsonValue } from "../../types";

export type ListingCreateInput = {
  listingCreatedBy: string;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
};
