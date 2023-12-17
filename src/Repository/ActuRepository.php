<?php

namespace App\Repository;

use App\Entity\Actu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Actu>
 *
 * @method Actu|null find($id, $lockMode = null, $lockVersion = null)
 * @method Actu|null findOneBy(array $criteria, array $orderBy = null)
 * @method Actu[]    findAll()
 * @method Actu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Actu::class);
    }

    public function findByMonth($month)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('SUBSTRING(a.publishAt, 6, 2) = :month')
            ->setParameter('month', $month)
            ->getQuery()
            ->getResult();
    }

    public function findByYear($year)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('SUBSTRING(a.publishAt, 1, 4) = :year')
            ->setParameter('year', $year)
            ->getQuery()
            ->getResult();
    }


    //    /**
    //     * @return Actu[] Returns an array of Actu objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('a.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Actu
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
