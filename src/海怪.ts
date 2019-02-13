/**
 * Kraken object
 */
export class 海怪 implements 生物 {
    /**
     * @inheritdoc
     */
    public fc(): boolean {
        return true;
    }

    /**
     * @inheritdoc
     */
    public ap(): boolean {
        return true;
    }

    public fail(): boolean {
        return false;
    }
}
