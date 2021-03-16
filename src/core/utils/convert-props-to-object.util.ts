import { Entity } from '../base-classes/entity.base';
import { ValueObject } from '../base-classes/value-object.base';

function isEntity(obj: unknown): obj is Entity<unknown> {
  return (
    Object.prototype.hasOwnProperty.call(obj, 'toObject') &&
    Object.prototype.hasOwnProperty.call(obj, 'id') &&
    ValueObject.isValueObject((obj as Entity<unknown>).id)
  );
}

function convertToRaw(item: any): any {
  if (ValueObject.isValueObject(item)) {
    return item.getRawProps();
  }
  if (isEntity(item)) {
    return item.toObject();
  }
  return item;
}

export function convertPropsToObject(props: any): any {
  const propsCopy = { ...props };

  // eslint-disable-next-line guard-for-in
  for (const prop in propsCopy) {
    if (Array.isArray(propsCopy[prop])) {
      propsCopy[prop] = (propsCopy[prop] as Array<unknown>).map((item) => {
        return convertToRaw(item);
      });
    }
    propsCopy[prop] = convertToRaw(propsCopy[prop]);
  }

  return propsCopy;
}
