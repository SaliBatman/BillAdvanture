import { KeyValuePair } from '../../Utility/KeyValuePair';
import { HtmlAndCss } from '../../Utility/HtmlAndCss';
import { ObjectOV } from '../../Configuration/ObjectVisual';
import { ObjectAttribute } from '../General/Enums';


export class ObjectUtility
{
    static AppearObject(name:string ,objectov : ObjectOV)
    {
        HtmlAndCss.CreateAndAppendCssClass(name, objectov.getProperteyList());
    }
    static AddBlockedAttribute(position:number,attribute:ObjectAttribute)
    {
        $("#"+position.toString()).attr(attribute,attribute);
    }
}